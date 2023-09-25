import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";
import Head from "next/head";

import Router from "next/router";

export default function AuthenticationTitle() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div style={{ paddingTop: "15vh" }}>
        <Container size={420} my={40}>
          <Title
            align="center"
            sx={(theme) => ({
              fontFamily: `Greycliff CF, ${theme.fontFamily}`,
              fontWeight: 900,
            })}
          >
            Welcome back Admin!
          </Title>

          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput label="Email" placeholder="you@mantine.dev" required />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              required
              mt="md"
            />
            <Group position="apart" mt="lg">
              <Checkbox label="Remember me" />
              <Anchor component="button" size="sm">
                Forgot password?
              </Anchor>
            </Group>
            <Button
              fullWidth
              mt="xl"
              style={{backgroundColor : "#0368FF"}}
              onClick={() => Router.push("/admin/labs")}
            >
              Sign in
            </Button>
          </Paper>
        </Container>
      </div>
    </>
  );
}
