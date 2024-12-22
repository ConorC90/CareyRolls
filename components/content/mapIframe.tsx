import * as Craft from "@/components/craft/layout";

const PageBody = ({ page, date }: PageProps) => {
  return (
    <Craft.Section>
      <Craft.Container>
        <iframe
          src="https://careyrolls.travelmap.net"
          width="100%"
          height="550"
          allowFullScreen
          frameBorder="0"
        ></iframe>
      </Craft.Container>
    </Craft.Section>
  );
};

export default PageBody;
