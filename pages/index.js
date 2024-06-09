import { gql } from "@apollo/client";
import client from "client";
import { BlockRendrer } from "components/Blockrendrer/BlockRendrer";
import { CleanAndTransfrom } from "utils/CLeanAndTransform";

export default function Home(props) {
  console.log(props);
  return <div>
    <BlockRendrer blocks={props.blocks} />
  </div>;
}


export const getStaticProps = async () => {
  const {data} = await client.query({
    query : gql `
         query NewQuery {
                nodeByUri(uri: "/") {
                  ... on Page {
                    id
                    blocks(postTemplate: false)
                  }
                }
              }
    `
  })

  return {
    props:{
      blocks: CleanAndTransfrom(data.nodeByUri.blocks),
      myexampleprop:"test",
    },
  };
}