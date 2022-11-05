import {render, screen} from '@testing-library/react';
import Home from '../pages/Home';

test("renders Home page", () => {
    render(<Home />);
    const linkElement = screen.getByText(/Home/i);
    expect(linkElement).toBeInTheDocument();
   }
);
test("search", () => {
    render(<Home />);
    const linkElement = screen.getByPlaceholderText(/search/i);
    expect(linkElement).toBeInTheDocument();
    }
);
test("button", () => {
    render(<Home />);
    const linkElement = screen.getByText(/sort/i);
    expect(linkElement).toBeInTheDocument();
    }
);
test("filter", () => {
    render(<Home />);
    const linkElement = screen.getByText(/filter/i);
    expect(linkElement).toBeInTheDocument();
    }
);
test("table", () => {
    render(<Home />);
    const linkElement = screen.getByText(/table/i);
    expect(linkElement).toBeInTheDocument();
    }
);
test("loader", () => {
    render(<Home />);
    const linkElement = screen.getByText(/loader/i);
    expect(linkElement).toBeInTheDocument();
    }
);
describe("logout", () => {
    it("should render", () => {
        render(<Home />);
        expect(screen.getByText("Logout")).toBeInTheDocument();
    });
});