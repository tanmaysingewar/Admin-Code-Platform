import Header from "@/Components/Header";
import { Button, Grid } from "@mantine/core";
import cpp from "@/assets/cpp.png"; //https://www.freepik.com/
import python from "@/assets/python.png";
import java from "@/assets/java.png";
import FacultyLabCard from "@/Components/admin/FacultyLabCard";
import Router from "next/router";


export default function FacultyLabs() {
    return (
        <>
         <div
            style={{ height: "100vh", overflowY: "scroll" }}
          >
            <div style={{marginTop : "40px"}}>
              <div style={{display : "flex",width : "90%",justifyContent : "space-between"}}>
            <Header title={"Assigned Labs 😄"} dec={"These Labs assign to you by the ADMIN, if changes required plz contact the admin"} />
            <Button style={{marginTop : "40px"}} onClick={() => Router.push("/admin/labs?create=lab")}>
              Create Lab
            </Button>
              </div>
            <Grid style={{ margin: "auto" }}>
              <FacultyLabCard
                key={1}
                logo={cpp}
                courseCode={"CPP203"}
                title={"C++"}
                dec={
                  "Basic C++ syntax and introduction to the c++ environment."
                }
                redirectLab={"/admin/labs?edit=CPP203"}
                // redirectTest={"/faculty/test/CPP203/"}
                redirectAnalysis={"/admin/labs?lab=cpp&&analysis=true"}
                BG_color={"#0368FF"}
                progress={40}
              />
              <FacultyLabCard
                key={2}
                logo={python}
                courseCode={"PY204"}
                title={"Python"}
                dec={
                  "Simple and easy to learn the practicals and applied problems."
                }
                redirectLab={"/admin/labs?edit=PY204"}
                redirectAnalysis={"/admin/labs?lab=Python&&analysis=true"}
                BG_color={"#4CAF50"}
                progress={70}
              />
              <FacultyLabCard
                key={3}
                logo={java}
                courseCode={"JV232"}
                title={"Java"}
                dec={"Introductory course to Java with DSA practice problems "}
                redirectLab={"/admin/labs?edit=JV232"}
                redirectAnalysis={"/admin/labs?lab=java&&analysis=true"}
                BG_color={"#CF75FF"}
                progress={20}
              />
            </Grid>
          </div>
          </div>
        </>
    );
}