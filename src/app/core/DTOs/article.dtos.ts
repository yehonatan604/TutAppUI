import { CategoryTypes } from "../../enterprise/enums/enums";

export interface ArticlePostDto {
      title: string;
      imageId: number;
      content: string;
      category: CategoryTypes;
      userName: string;
      userEmail: string;
      created: Date;
}