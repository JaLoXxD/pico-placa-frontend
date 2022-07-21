import { render, screen, fireEvent } from "@testing-library/react";
import { Popup } from "../../src/components/Popup";

jest.mock("../../src/assets/images/approve.gif", () => {
	return {
		default: "approve.gif",
	};
});
jest.mock("../../src/assets/images/error.gif", () => {
	return {
		default: "error.gif",
	};
});

jest.mock("../../src/assets/images/approve.gif");
jest.mock("../../src/assets/images/error.gif");

describe("tests on Popup component", () => {
	test("should make match with the snapshot", () => {
		const { container } = render(<Popup />);
		expect(container).toMatchSnapshot();
	});

	test("should have a title in h2 and description in div", () => {
		const title = "Test title";
		const description = "I am the description";
		render(<Popup title={title} description={description} />);
		expect(screen.getByRole("heading", { level: 2 }).innerHTML).toBe(title);
		expect(screen.getByRole("descCont").innerHTML).toBe(description);
	});

	test("should have class showPopup if visible is true", () => {
		render(<Popup visible={true} />);
		expect(screen.getByRole("popupContainer").classList).toContain("showPopup");
	});
});
