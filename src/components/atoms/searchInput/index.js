import React from "react";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

export default function SearchInput(props) {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleChange = event => {
    const {
      target: { value }
    } = event;
    setSearchTerm(value);
    props.onSearchChange(value);
  };

  return (
    <FormControl fullWidth>
      <TextField
        id="standard-search"
        label="Search by Name"
        type="search"
        value={searchTerm}
        onChange={handleChange}
      />
    </FormControl>
  );
}
