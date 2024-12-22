import Heading from "./Heading";

function Empty({ children, asDiv = false }) {
  if (asDiv)
    return (
      <div>
        <EmptyHeading as="h3">{children}</EmptyHeading>
      </div>
    );

  return (
    <tbody>
      <tr>
        <EmptyHeading>{children}</EmptyHeading>
      </tr>
    </tbody>
  );
}

function EmptyHeading({ children, as = "td" }) {
  return (
    <Heading
      as={as}
      padding="none"
      variation="tertiary"
      size="sm"
      color="light"
    >
      {children}
    </Heading>
  );
}

export default Empty;
