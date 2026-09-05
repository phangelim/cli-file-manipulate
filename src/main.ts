import * as fs from "node:fs";


class fileManager {
  private fileManager: number = 0;

  constructor(fileManager: number) {
    this.fileManager = fileManager;
  };

  listPath(path: string) {
    const cont: string[] = fs.readdirSync(path);

    for (let i = 0; i <= path.length; i++) {
      let content = cont[i];

      console.log(content)
    };
  }


  exitCli() { process.exit(0); };


  create(num: number) {
    if (num == 1) {
      const file: string = prompt("Write the file with the extension:")!;

      try {
        fs.writeFileSync(`${file}`, " is created with CLI inside this directory!!!");
      }
      catch (error) {
        console.error("Error to create the file");
      };
    }

    else if (num == 2) {
      const nameFolder: string = prompt("Write the name of folder:")!;

      try {
        fs.mkdirSync(`${nameFolder}`);
      }
      catch (error) {
        console.error(`Error to create the folder ${nameFolder}`);
      };
    };
  }

  delete() {
    const pathDelete: string = prompt("Write the path to Delete the file:")!;

    try {
      fs.rmSync(`${pathDelete}`);
    }
    catch (error) {
      console.error(`Error to Delete the file`);
    };
  }

  rename() {
    const renameFile: string = prompt("Enter the path of the file for rename:")!;

    const newName: string = prompt("Write the new Name:")!;

    try {
      fs.renameSync(`${renameFile}`, `${newName}`);
    }
    catch (error) {
      console.error(`Error to rename the file ${newName}`);
    };
  }
  loop() { }
}











class Menu {

  public showMenu() {
    console.log("CLI FILE MANIPULATE\n");

    console.log("SELECT YOUR OPTION\n");;

    console.log("1-Create file\n");

    console.log("2-Create folder\n");

    console.log("3-Delete file or folder\n");

    console.log("4-List all\n");

    console.log("5-Rename a file or folder\n");

    console.log("6-Exit\n");

    this.options();
  };

  private options() {
    const answer: number = parseInt(prompt("Write your answer please!!:")!);

    const managerFile: fileManager = new fileManager(answer);

    switch (answer) {
      case 4:
        const way: string = prompt("Write the path:")!;

        managerFile.listPath(way);
        break;

      case 6:
        managerFile.exitCli();
        break;

      case 1:
        managerFile.create(answer);
        break;

      case 2:
        managerFile.create(answer);
        break;

      case 3:
        managerFile.delete();
        break;

      case 5:
        managerFile.rename();
        break;

    };




  }

}


const cli_menu: Menu = new Menu();
cli_menu.showMenu();



