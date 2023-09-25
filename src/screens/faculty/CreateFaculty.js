import { Button, Text, Box, Input, Select, Textarea, Popover, PasswordInput, Progress } from "@mantine/core";
import Router from "next/router";
import { DateInput } from "@mantine/dates";
import Header from "@/Components/Header";
import BackNav from "@/Components/BackNav";
import { useState } from "react";
import { IconX } from "@tabler/icons-react";



export default function CreateFaculty() {
  return (
    <div style={{height : "100vh", overflowY : "scroll",width : "100%"}}>
      <div style={{marginTop : "60px"}}>
      <div style={{ marginTop: "40px" }}>
      <BackNav
          dataTrack={[]}
        />
        <Header
          title={`Create Faculty`}
        />
      </div>
      <div style={{width : "100%"}}>
        <Box padding="xl" style={{width : "650px"}}>
          <div>
            <Input.Wrapper
              id="fName"
              withAsterisk
              label="Name of the Faculty"
              description="Please enter proper name of faculty this will reflect all over the platform"
              error="Please enter name"
            >
              <Input
                label="Faculty Name"
                placeholder="Enter Faculty Name"
                style={{ width: "500px" }}
              />
            </Input.Wrapper>

            <div style={{ marginTop: "20px", display: "flex" }}>
              <Input.Wrapper
                id="fEmail"
                withAsterisk
                label="Email Id"
                error="Please Enter Proper Email Id"
              >
                <Input
                  type="email"
                  label="Email"
                  placeholder="Enter Proper Email Id"
                  style={{ width: "300px" }}
                />
              </Input.Wrapper>
            </div>
              <PasswordInputAdvance />
          </div>
        </Box>
        <div style={{marginTop: "40px", marginBottom : "60px" }}>
            <Text style={{fontSize : "12px",marginBottom : "10px"}}><b>Note :</b> Email will send to the given Email Id with Password</Text>
          <Button onClick={() => Router.push("/student/profile")}>
            Create & Save
          </Button>
        </div>
      </div>
    </div>
    </div>
  );
}

function PasswordRequirement({ meets, label }){
    return (
      <Text
        color={meets ? 'teal' : 'red'}
        sx={{ display: 'flex', alignItems: 'center' }}
        mt={7}
        size="sm"
      >
        {meets ? <IconCheck size="0.9rem" /> : <IconX size="0.9rem" />} <Box ml={10}>{label}</Box>
      </Text>
    );
  }
  
  const requirements = [
    { re: /[0-9]/, label: 'Includes number' },
    { re: /[a-z]/, label: 'Includes lowercase letter' },
    { re: /[A-Z]/, label: 'Includes uppercase letter' },
    { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
  ];

  function getStrength(password) {
    let multiplier = password.length > 5 ? 0 : 1;
  
    requirements.forEach((requirement) => {
      if (!requirement.re.test(password)) {
        multiplier += 1;
      }
    });
  
    return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
  }

function PasswordInputAdvance() {
    const [popoverOpened, setPopoverOpened] = useState(false);
    const [value, setValue] = useState('');
    const checks = requirements.map((requirement, index) => (
      <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(value)} />
    ));
  
    const strength = getStrength(value);
    const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red';
  
    return (
      <Box maw={340}  style={{marginTop : "20px"}}>
        <Popover opened={popoverOpened} position="bottom" width="target" transitionProps={{ transition: 'pop' }}>
          <Popover.Target>
            <div
              onFocusCapture={() => setPopoverOpened(true)}
              onBlurCapture={() => setPopoverOpened(false)}
            >
              <PasswordInput
                withAsterisk
                label="Password"
                placeholder="Your password"
                value={value}
                onChange={(event) => setValue(event.currentTarget.value)}
              />
            </div>
          </Popover.Target>
          <Popover.Dropdown>
            <Progress color={color} value={strength} size={5} mb="xs" />
            <PasswordRequirement label="Includes at least 6 characters" meets={value.length > 5} />
            {checks}
          </Popover.Dropdown>
        </Popover>
      </Box>
    );
  }