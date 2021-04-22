import React from "react";

import Grid from "@material-ui/core/Grid";
import "../../../../../index.css";
import Paper from "@material-ui/core/Paper";

import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import HomeIcon from "../../ui/HomeIcon";

export default function FooterSection(props) {
  return (
    <Grid
      container
      style={{
        background: "transparent",
      }}
    >
      <Grid item xs={1}>
        <Paper
          style={{
            height: "1rem",
            background: "transparent",
            boxShadow: "none",
          }}
        ></Paper>
      </Grid>
      <Grid item xs={10}>
        <div
          style={{
            height: "25rem",
            boxShadow: "none",
          }}
        >
          <div style={{ height: "8rem" }}></div>
          <div style={{ height: "2rem" }}>
            <div
              style={{
                width: "auto",
                float: "left",
              }}
            >
              <Typography
                variant="h5"
                style={{
                  textAlign: "left",
                  flexGrow: 1,
                  fontFamily: "Lobster",
                }}
              >
                <Link href="/" style={{ color: "#2a6bf4" }}>
                  My Portfolio
                </Link>
              </Typography>
            </div>

            <div
              style={{
                width: "auto",
                float: "left",
              }}
            >
              <HomeIcon style={{ color: "#2a6bf4" }}></HomeIcon>
            </div>

            <div
              style={{
                width: "68%",
                border: "thin transparent solid",
                float: "left",
              }}
            ></div>

            <div
              style={{
                width: "5%",

                float: "left",
              }}
            >
              LinkedIn
            </div>
            <div
              style={{
                width: "5%",

                float: "left",
              }}
            >
              Twitter
            </div>
            <div
              style={{
                width: "5%",

                float: "left",
              }}
            >
              Blog
            </div>
            <div
              style={{
                width: "5%",

                float: "left",
              }}
            >
              FAQ
            </div>
          </div>

          <div style={{ height: "2rem" }}></div>

          <hr
            style={{
              textAlign: "left",
            }}
          ></hr>

          <div style={{ height: "2rem" }}></div>

          <div style={{ height: "2rem" }}>
            <div
              style={{
                width: "12%",
                textAlign: "left",
                float: "left",
              }}
            >
              @MyPortfolioHome.inc
            </div>

            <div
              style={{
                width: "10%",

                float: "left",
              }}
            >
              Terms & Conditions
            </div>

            <div
              style={{
                width: "10%",

                float: "left",
              }}
            >
              Privacy Policy
            </div>

            <div
              style={{
                width: "58%",

                float: "left",
                border: "thin transparent solid",
              }}
            ></div>

            <div
              style={{
                width: "auto",

                float: "left",
              }}
            >
              Language: English
            </div>
          </div>
          <div style={{ height: "9rem" }}></div>
        </div>
      </Grid>
      <Grid item xs={1}>
        <Paper
          style={{
            height: "1rem",
            background: "transparent",
            boxShadow: "none",
          }}
        ></Paper>
      </Grid>
    </Grid>
  );
}
