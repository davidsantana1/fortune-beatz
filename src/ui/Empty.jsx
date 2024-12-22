import Heading from "./Heading";

function Empty({ children }) {
  return (
    <tbody>
      <tr>
        <Heading
          as="td"
          padding="none"
          variation="tertiary"
          size="sm"
          color="light"
        >
          {children}
        </Heading>
      </tr>
    </tbody>
  );
}

export default Empty;
