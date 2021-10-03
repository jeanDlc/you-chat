import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      purple: string;
      pLight: string;
      pDark: string;
      gray: string;
      gray2: string;
    };
  }
}
