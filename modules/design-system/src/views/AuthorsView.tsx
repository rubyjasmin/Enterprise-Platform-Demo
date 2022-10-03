import useSWR from "swr";
import { Image, Text, View } from "dripsy";

import { PageLayout } from "~layouts";

export function AuthorsView() {
  const { data, error } = useSWR(/* GraphQL */ `
    query {
      authors {
        data {
          id
          attributes {
            firstName
            lastName
            email
            avatar
          }
        }
      }
    }
  `);

  if (!data || error) return <>loading</>;

  return (
    <PageLayout>
      <View sx={{ flexDirection: "row", flexWrap: "wrap" }}>
        {data.authors.data.map(({ id, attributes }: any) => {
          const { firstName, lastName, email, avatar } = attributes;
          return (
            <View key={id} sx={{ alignItems: "center", mx: 16, mb: 32 }}>
              <Text variant="bold">{`${firstName} ${lastName}`}</Text>
              <Text>{email}</Text>
              <Image source={{ uri: avatar }} style={{ height: 128, width: 128 }} />
            </View>
          );
        })}
      </View>
    </PageLayout>
  );
}
