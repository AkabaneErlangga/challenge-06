import { render, screen, fireEvent } from "@testing-library/react"
import Register from "../Register"

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => (jest.fn()),
  useHref: () => (jest.fn())
}));
test('test register page', () => {
  render(<Register />)
  const element = screen.getByTestId('register-page')
  const errElement = screen.getByTestId('error-message')
  fireEvent.click(element)
  expect(errElement).toBeInTheDocument()
})