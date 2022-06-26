import React from "react";
import { Chip } from "@mui/material";
import Card2 from "./Card";
import { Grid } from "@mui/material";
function Result({ props, imgUrl }) {
  const NoRes = () => {
    return (
      <div className="mono text-red-500 mt-2">
        <h2>No Results</h2>
      </div>
    );
  };
  return (
    <div>
      {/* <NoRes /> */}
      {console.log(props)}
      <div className="relative left-8 w-40 aspect-square  border-4 border-white rounded-lg rounded-b-none">
        <img
          className="absolute object-cover w-100 h-100 -z-20 rounded-lg"
          // src={"https://via.placeholder.com/300"}
          src={!imgUrl ? "https://via.placeholder.com/300" : imgUrl}
          alt="medicine"
        />
      </div>
      <div className="w-full border-0 border-white border-t-4 drop-shadow-md "></div>
      <div className="flex gap-10 justify-between w-full bg-amber-200 py-4 px-8">
        <div className="flex justify-start text-lg flex-2">
          {" "}
          {!props.brand_name ? `Medicine Name` : props.brand_name}
        </div>
        <div className="flex flex-1 space-x-2">
          {props.route && (
            <Chip
              label={props.route}
              color="default"
              className="justify-start"
            />
          )}
          {props.nui && (
            <Chip
              label={props.nui[0]}
              color="default"
              className="justify-start"
            />
          )}
          {props.keep_out_of_reach_of_children && (
            <Chip
              label="Keep out of reach of children"
              color="error"
              className="justify-start"
            />
          )}
          <Chip
            label={props.boxed_warning ? `UnSafe` : `Safe`}
            className="justify-start"
            color={props.boxed_warning ? `error` : `success`}
          />
        </div>
      </div>
      <div className="p-2">
        <Grid container spacing={2}>
          {props.manufacturer && (
            <Grid item xs={4}>
              <Card2 title="Manufacturer Name" body={props.manufacturer} />
            </Grid>
          )}

          {props.substance_name && (
            <Grid item xs={4}>
              <Card2 title="Substance Name" body={props.substance_name} />
            </Grid>
          )}

          {props.purpose && (
            <Grid item xs={4}>
              <Card2 title="Purpose" body={props.purpose} />
            </Grid>
          )}

          {props.storage_and_handling && (
            <Grid item xs={8}>
              <Card2
                title="Storage and handling"
                body={props.storage_and_handling}
              />
            </Grid>
          )}

          {props.indications_and_usage && (
            <Grid item xs={4}>
              <Card2
                title="Dosage Instruction"
                body={props.indications_and_usage}
              />
            </Grid>
          )}

          {props.active_ingredient && (
            <Grid item xs={4}>
              <Card2 title="Active Ingredient" body={props.active_ingredient} />
            </Grid>
          )}

          {props.inactive_ingredient && (
            <Grid item xs={4}>
              <Card2
                title="Inactive Ingredient"
                body={props.inactive_ingredient}
              />
            </Grid>
          )}

          {props.keep_out_of_reach_of_children && (
            <Grid item xs={4}>
              <Card2
                title="Keep Out of Children"
                body={props.keep_out_of_reach_of_children}
              />
            </Grid>
          )}
          {props.warnings && (
            <Grid item xs={8}>
              <Card2 title="Warnings" body={props.warnings} />
            </Grid>
          )}

          {props.boxed_warning && (
            <Grid item xs={4}>
              <Card2 title="Boxed Warning" body={props.boxed_warning} />
            </Grid>
          )}
        </Grid>
      </div>
    </div>
  );
}

export default Result;
