import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Loader from "../components/Loader";
import { useLocation } from "react-router-dom";
const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [error, setError] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    fetch(`https://randomuser.me/api/?page=${page}&results=20`)
      .then((res) => res.json())
      .then((data) => {
        setUsers((prevUsers) => {
          return [
            ...new Set([...prevUsers, ...data.results.map((user) => user)]),
          ];
        });
        setFilteredUsers((prevUsers) => {
          return [
            ...new Set([...prevUsers, ...data.results.map((user) => user)]),
          ];
        });
        setHasMore(data.results.length > 0);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, [page]);

  const observer = React.useRef();
  const lastUserElementRef = React.useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );
  const logout = () => {
    localStorage.removeItem("auth");
    window.location.href = "/";
  };

  return (
    <div className={styles.container}>
      <h1>Users</h1>
      <button className={styles.logout} onClick={logout}>
        Logout
      </button>

      <div className={styles.scroll}>
        <div className={styles.scrollBody}>
          {filteredUsers.map((user, index) => {
            if (filteredUsers.length === index + 1) {
              return (
                <div
                  className={styles.scrollItem}
                  key={user.email}
                  ref={lastUserElementRef}
                >
                  <div className={styles.scrollItemName}>
                    <img src={user.picture.thumbnail} alt="user" />
                  </div>
                  <div className={styles.scrollItemNameText}>
                    {user.name.first} {user.name.last}
                  </div>
                  <div className={styles.scrollItemEmail}>{user.email}</div>
                  <div className={styles.scrollItemPhone}>{user.phone}</div>
                </div>
              );
            } else {
              return (
                <div className={styles.scrollItem} key={user.email}>
                  <div className={styles.scrollItemName}>
                    <img src={user.picture.thumbnail} alt="user" />
                  </div>
                  <div className={styles.scrollItemNameText}>
                    Name: {user.name.first} {user.name.last}
                  </div>
                  <div className={styles.scrollItemEmail}>
                    Email: {user.email}
                  </div>
                  <div className={styles.scrollItemPhone}>
                    Mobile: {user.phone}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className={styles.loader}>{loading && <Loader />}</div>
      <div className={styles.error}>{error && "Error"}</div>
    </div>
  );
};
export default Home;
