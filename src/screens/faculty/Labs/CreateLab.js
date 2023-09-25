import { Button, Text, Box, Input, Select, Textarea } from "@mantine/core";
import Router from "next/router";
import { DateInput } from "@mantine/dates";
import Header from "@/Components/Header";
import BackNav from "@/Components/BackNav";

export default function CreateLab() {
  return (
    <div style={{height : "100vh", overflowY : "scroll",width : "100%"}}>
      <div style={{ marginTop: "60px" }}>
      <BackNav
          dataTrack={[]}
        />
        <Header
          title={`Create Lab`}
        />
      </div>
      <div style={{width : "100%"}}>
        <Box padding="xl" style={{width : "650px"}}>
          <div>
            <Input.Wrapper
              id="fName"
              withAsterisk
              label="Name of the Lab"
              error="Please enter name"
            >
              <Input
                label="Faculty Name"
                placeholder="Enter Lab Name"
                style={{ width: "500px" }}
              />
            </Input.Wrapper>
            <Input.Wrapper
              id="fName"
              withAsterisk
              label="ID of the Lab"
              error="Please Lab ID"
              style={{marginTop : "20px"}}
            >
              <Input
                label="Faculty Name"
                placeholder="Enter Faculty Name"
                style={{ width: "500px" }}
              />
            </Input.Wrapper>
            <div style={{ marginTop: "20px" }}>
              <Textarea
                placeholder="Description of the Lab"
                label="Description"
                withAsterisk
              />
            </div>
            <div style={{marginTop : "20px",display : "flex"}}>
            <Select
                style={{ width : "200px"}}
                withAsterisk
                label="Current Year"
                placeholder="Pick one"
                error="Select Current Year"
                data={[
                  { value: "1", label: "First" },
                  { value: "2 ", label: "Second" },
                  { value: "3 ", label: "Third" },
                  { value: "4 ", label: "Final" },
                ]}
              />
              <Select
                style={{ width : "200px",marginLeft : "20px"}}
                withAsterisk
                label="Branch"
                placeholder="Pick one"
                error="Select Branch"
                data={[
                  { value: "ctec", label: "CTec" },
                  { value: "aids", label: "AIDS" },
                  { value: "cse", label: "CSE" },
                  { value: "ece", label: "ECE" },
                  { value: "eee", label: "EEE" },
                ]}
              />

            </div>
            <div style={{ marginTop: "20px", display: "flex" }}>
              <Select
                withAsterisk
                label="Current Semester"
                placeholder="Pick one"
                error="Select Current Semester"
                data={[
                  { value: "1", label: "I" },
                  { value: "2", label: "II" },
                  { value: "3", label: "III" },
                  { value: "4", label: "IV" },
                  { value: "4", label: "V" },
                  { value: "4", label: "VI" },
                  { value: "4", label: "VII" },
                  { value: "4", label: "VIII" },
                ]}
              />
              <Select
                style={{ marginLeft: "20px" }}
                withAsterisk
                label="Current Year"
                placeholder="Pick one"
                error="Select Current Year"
                data={[
                  { value: "1", label: "First" },
                  { value: "2 ", label: "Second" },
                  { value: "3 ", label: "Third" },
                  { value: "4 ", label: "Final" },
                ]}
              />
              </div>
          </div>
        </Box>
        <div style={{ marginTop: "40px", marginBottom : "60px" }}>
          <Button onClick={() => Router.push("/student/profile")}>
            Conform & Save
          </Button>
        </div>
      </div>
    </div>
  );
}
