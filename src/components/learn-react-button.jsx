import { Button } from "@material-ui/core";
import { getCharacter } from "../services/marvel-characters-service";

function HelloWorldButton() {
    function test(){
        getCharacter().then(character => {
            alert(JSON.stringify(character.name));
        });
        
    }

    return (
      <Button variant="contained" color="primary" onClick={test}>
        Hello world
      </Button>
    );
  }

  export default HelloWorldButton;