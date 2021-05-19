import { gql } from '@apollo/client'
import client from '../apollo-client'
import Page from '../components/page'

export async function getServerSideProps({ locale }) {
  const { data } = await client.query({
    query: gql`
      query PagesQuery {
        pages(locales:[${locale.replace("-", "_")}]) {
          heading
          text {
            html
          }
        }
      }
    `,
  });

  return {
    props: {
      data
    },
  };
}

export default function ({ data }) {
  const page = data.pages[0];
  return (
    <Page>
      <h1>{page.heading}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.text.html }} />
    </Page>
  )
}
