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
    
  }
  
}

const cli_menu: Menu = new Menu();

cli_menu.showMenu();


