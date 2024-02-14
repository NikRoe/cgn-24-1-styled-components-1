import styled from "styled-components";
import Link from "next/link";

// create a new styled component with new html element
const Button = styled.button`
  all: unset;
  border: none;
  cursor: pointer;
  padding: 1rem;
  color: white;
  background-color: var(--primary-color);

  &:hover {
    color: black;
    background-color: var(--primary-background);
  }
`;

// create a new styled component extending an existing component
const StyledLink = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: var(--primary-color);

  &:hover {
    color: var(--secondary-color);
  }
`;

export default function HomePage() {
  return (
    <>
      <Button type="button">Click mich</Button>

      <p>
        This is a <StyledLink href="/">styled link</StyledLink>
      </p>
    </>
  );
}
