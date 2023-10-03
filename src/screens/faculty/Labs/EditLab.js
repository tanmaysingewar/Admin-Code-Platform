import { Button, Text, Box, Input, Select, Textarea } from "@mantine/core";
import Router from "next/router";
import { DateInput } from "@mantine/dates";
import Header from "@/Components/Header";
import BackNav from "@/Components/BackNav";
import { useState } from "react";

export default function EditLab() {
  const [facultyOne, setFacultyOne] = useState("")
  // Faculty Two state
  const [facultyTwo, setFacultyTwo] = useState("")
  // Faculty Three state
  const [facultyThree, setFacultyThree] = useState("")
  return (
    <div style={{height : "100vh", overflowY : "scroll",width : "100%"}}>
      <div style={{ marginTop: "60px" }}>
      <BackNav
          dataTrack={[]}
        />
        <Header
          title={`Edit Lab`}
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
                label="Academic Year"
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
                label="Semester"
                placeholder="Pick one"
                error="Select Semester"
                data={[
                  { value: "1", label: "I" },
                  { value: "2", label: "II" },
                  { value: "3", label: "III" },
                  { value: "4", label: "IV" },
                  { value: "5", label: "V" },
                  { value: "6", label: "VI" },
                  { value: "7", label: "VII" },
                  { value: "8", label: "VIII" },
                ]}
              />
              <Select
                style={{ marginLeft: "20px" }}
                withAsterisk
                label="Section"
                placeholder="Pick one"
                error="Select Section"
                data={[
                  { value: "a", label: "A" },
                  { value: "b", label: "B" },
                  { value: "c", label: "C" },
                  { value: "d", label: "D" },
                  { value: "e", label: "E" },
                  { value: "f", label: "F" },
                  { value: "g", label: "G" },
                  { value: "h", label: "H" },
                ]}
              />
              </div>
              <div style={{ marginTop: "20px", display: "flex" }}>
              <Select
                label="Select Faculty One"
                placeholder="Pick one"
                searchable
                onSearchChange={(value) => setFacultyOne(value)}
                searchValue={facultyOne}
                nothingFound="No options"
                data={["React", "Angular", "Svelte", "Vue"]}
              />
            </div>
            <div style={{ marginTop: "20px", display: "flex" }}>
            <Select
                label="Select Faculty Two"
                placeholder="Pick one"
                searchable
                onSearchChange={(value) => setFacultyTwo(value)}
                searchValue={facultyTwo}
                nothingFound="No options"
                data={["React", "Angular", "Svelte", "Vue"]}
                style={{marginRight : "10px"}}
              />
              <Select
                label="Select Faculty One"
                placeholder="Pick one"
                searchable
                onSearchChange={(value) => setFacultyThree(value)}
                searchValue={facultyThree}
                nothingFound="No options"
                data={["React", "Angular", "Svelte", "Vue"]}
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
