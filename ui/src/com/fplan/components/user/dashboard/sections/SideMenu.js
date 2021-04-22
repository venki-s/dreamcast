import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const ExpansionPanel = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: "#1A73E8",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    color: "white",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

export default function SideMenu() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <div style={{ width: "15%", height: "50rem" }}>
        <ExpansionPanel
          square
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <ExpansionPanelSummary
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography>Income</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Link
              href="/signinsuccess"
              style={{ color: "#2a6bf4", fontSize: "1rem" }}
            >
              Salary
            </Link>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <Link
              href="/signinsuccess"
              style={{ color: "#2a6bf4", fontSize: "1rem" }}
            >
              Fixed Income
            </Link>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <Link
              href="/signinsuccess"
              style={{ color: "#2a6bf4", fontSize: "1rem" }}
            >
              Rental Income
            </Link>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <Link
              href="/signinsuccess"
              style={{ color: "#2a6bf4", fontSize: "1rem" }}
            >
              Other Income
            </Link>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <ExpansionPanelSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography>Investments</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Link
              href="/signinsuccess"
              style={{ color: "#2a6bf4", fontSize: "1rem" }}
            >
              Fixed Deposits
            </Link>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <Link
              href="/signinsuccess"
              style={{ color: "#2a6bf4", fontSize: "1rem" }}
            >
              Stocks
            </Link>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <Link
              href="/signinsuccess"
              style={{ color: "#2a6bf4", fontSize: "1rem" }}
            >
              Mutual Funds
            </Link>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <Link
              href="/signinsuccess"
              style={{ color: "#2a6bf4", fontSize: "1rem" }}
            >
              Derivatives
            </Link>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <Link
              href="/signinsuccess"
              style={{ color: "#2a6bf4", fontSize: "1rem" }}
            >
              Providen Funds
            </Link>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <Link
              href="/signinsuccess"
              style={{ color: "#2a6bf4", fontSize: "1rem" }}
            >
              ULIPS
            </Link>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <Link
              href="/signinsuccess"
              style={{ color: "#2a6bf4", fontSize: "1rem" }}
            >
              Bonds
            </Link>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <Link
              href="/signinsuccess"
              style={{ color: "#2a6bf4", fontSize: "1rem" }}
            >
              Debentures
            </Link>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <Link
              href="/signinsuccess"
              style={{ color: "#2a6bf4", fontSize: "1rem" }}
            >
              Properties
            </Link>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <Link
              href="/signinsuccess"
              style={{ color: "#2a6bf4", fontSize: "1rem" }}
            >
              Commodities
            </Link>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <Link
              href="/signinsuccess"
              style={{ color: "#2a6bf4", fontSize: "1rem" }}
            >
              Pension Schems
            </Link>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails style={{ textAlign: "left" }}>
            <Link
              href="/signinsuccess"
              style={{ color: "#2a6bf4", fontSize: "1rem" }}
            >
              Savings / Recurring deposit Accounts
            </Link>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <Link
              href="/signinsuccess"
              style={{ color: "#2a6bf4", fontSize: "1rem" }}
            >
              Others
            </Link>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <ExpansionPanelSummary
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography>Liabiliies</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Link
              href="/signinsuccess"
              style={{ color: "#2a6bf4", fontSize: "1rem" }}
            >
              Loans
            </Link>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <Link
              href="/signinsuccess"
              style={{ color: "#2a6bf4", fontSize: "1rem" }}
            >
              Credit Card
            </Link>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <Link
              href="/signinsuccess"
              style={{ color: "#2a6bf4", fontSize: "1rem" }}
            >
              Mortagages
            </Link>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <Link
              href="/signinsuccess"
              style={{ color: "#2a6bf4", fontSize: "1rem" }}
            >
              Cash Borrowings
            </Link>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <Link
              href="/signinsuccess"
              style={{ color: "#2a6bf4", fontSize: "1rem" }}
            >
              Others
            </Link>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
      <div style={{ width: "85%" }}></div>
    </div>
  );
}
