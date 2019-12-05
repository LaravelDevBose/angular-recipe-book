export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public status?: boolean;

  constructor(name: string, desc: string, imagePath: string, status: boolean) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.status = status;
  }
}
