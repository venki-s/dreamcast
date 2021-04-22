import React from "react";

import Grid from "@material-ui/core/Grid";
import "../../../../../index.css";
import Paper from "@material-ui/core/Paper";
import Sign from "../../ui/Sign";
import HeaderImages from "../../images/header/HeaderImages";

export default function MainSection(props) {
  return (
    <Grid
      container
      style={{
        background: "transparent",
      }}
    >
      <Grid
        item
        xs={6}
        style={{
          paddingLeft: "2rem",
          paddingTop: "4rem",
          paddingRight: "2rem",
        }}
      >
        <h2
          style={{
            fontSize: "52px",
            fontFamily: "Manrope",
            color: "#2a6bf4",
          }}
        >
          Be cognizient about your money
        </h2>
        <h4
          style={{
            fontSize: "20px",
            fontFamily: "Manrope",
            fontWeight: 200,
          }}
        >
          Take definite steps now to make your goals pragmatic. My Portolio Home
          give you a diverse range of options to enter your inflow and outflow
          of your funds.
        </h4>
      </Grid>
      <Grid item xs={6} style={{ paddingLeft: "5rem" }}>
        <HeaderImages image={"1"}></HeaderImages>
      </Grid>
      <Grid item xs={6} style={{ paddingLeft: "5rem" }}>
        <HeaderImages image={"2"}></HeaderImages>
      </Grid>
      <Grid
        item
        xs={6}
        style={{
          paddingLeft: "2rem",
          paddingTop: "4rem",
          paddingRight: "2rem",
        }}
      >
        <h2
          style={{
            fontSize: "52px",
            fontFamily: "Manrope",
            color: "#2a6bf4",
          }}
        >
          Proactively set your life goals
        </h2>
        <h4
          style={{
            fontSize: "20px",
            fontFamily: "Manrope",
            fontWeight: 200,
          }}
        >
          Dreams thrive our lives. Don't let dreams go in vain wihtout proper
          planning and execution. We provide an opportunity for you to place
          your plan in action.
        </h4>
      </Grid>
      <Grid
        item
        xs={6}
        style={{
          paddingLeft: "2rem",
          paddingTop: "4rem",
          paddingRight: "2rem",
        }}
      >
        <h2
          style={{
            fontSize: "52px",
            fontFamily: "Manrope",
            color: "#2a6bf4",
          }}
        >
          Reports and Analytics
        </h2>
        <h4
          style={{
            fontSize: "20px",
            fontFamily: "Manrope",
            fontWeight: 200,
          }}
        >
          Comprehensive reports and analysis provides you path towards achieving
          your goals. You will be provided with wide variety investments options
          to link with yuor goals.
        </h4>
      </Grid>
      <Grid item xs={6} style={{ paddingLeft: "5rem" }}>
        <HeaderImages image={"3"}></HeaderImages>
      </Grid>
      <Grid item xs={12} style={{ padding: "2rem" }}></Grid>
      <Grid item xs={1}>
        <Paper
          style={{
            height: "25rem",
            background: "transparent",
            boxShadow: "none",
          }}
        ></Paper>
      </Grid>
      <Grid item xs={10}>
        <div
          style={{
            height: "25rem",
            borderRadius: "5rem",
            boxShadow: "none",
            background: "linear-gradient(to right , #86abf9, #6893ee)",
          }}
        >
          <div
            style={{
              height: "30%",
            }}
          >
            <h4
              style={{
                fontSize: "3rem",
                fontFamily: "Manrope",
                fontWeight: "bold",
                color: "white",
                paddingTop: "4rem",
                textAlign: "left",
                paddingLeft: "3rem",
                width: "40rem",
              }}
            >
              Manage your funds
            </h4>
          </div>
          <div
            style={{
              height: "40%",
            }}
          >
            <p
              style={{
                fontSize: "2rem",
                fontFamily: "Manrope",
                fontWeight: 200,
                color: "white",
                textAlign: "left",
                paddingLeft: "3rem",
                paddingRight: "3rem",
              }}
            >
              Say good bye to excel, transform your funds monitoring ways. Get
              control of your monetary and lay path for your goals.
            </p>
          </div>
          <div
            style={{
              height: "30%",
              textAlign: "left",
              paddingLeft: "3rem",
            }}
          >
            <Sign signUpNav={props.signUpNav} action={"signup"}></Sign>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
