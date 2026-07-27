import * as fs from "node:fs";

showMenu();

function showMenu() {
  console.log("CLI FILE MANIPULATE\n");

  console.log("SELECT YOUR OPTION\n");;

  console.log("1-Create file\n");

  console.log("2-Create folder\n");

  console.log("3-Delete file or folder\n");

  console.log("4-List all\n");

  console.log("5-Rename a file or folder\n");

  console.log("6-Exit\n");

  options();
}

function options() {
  const answer: number = parseInt(prompt("Your answer?:")!);

  if (answer == 4) {
    const path: string = prompt("Write the path:")!;

    listContent(path);

  }

  else if (answer == 6) {
    process.exit(0);
  }

  else if (answer == 1) {
    const name: string = prompt("Write the name of file with the extension?:")!;

    try {
      fs.writeFileSync(`${name}`, "Created with CLI");
    }
    catch (error) {
      console.error("Error to create the file");
    }
  }

  else if (answer == 2) {
    const folderName = prompt("Enter the folder name:");

    try {
      fs.mkdirSync(`${folderName}`);
    }
    catch (error) {
      console.error(`Error to create the folder ${folderName}`);
    };
  }

  else if (answer == 3) {
    const deleteName = prompt("Write the path to delete the file:");

    try {
      fs.rmSync(`${deleteName}`, { recursive: true });
    }
    catch (error) {
      console.error("Error to delete the file");
    }
  }

  else if (answer == 5) {
    const renameFile = prompt("Enter the path of file for rename:");

    const newName = prompt("Write the new name:");

    try {
      fs.renameSync(`${renameFile}`, `${newName}`);
    }
    catch (error) {
      console.error(`Error for rename the file ${renameFile}`);
    };

  }

  else {
    console.log("Invalid option, try again!");
  }

  showMenu();

}

function listContent(targetpath: string) {
  const contents: string[] = fs.readdirSync(targetpath);

  for (let i = 0; i < contents.length; i++) {
    let str = contents[i];

    console.log(str);

  }
}


