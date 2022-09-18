export interface Theme {
  elements: string;
  input: string;
  text: string;
  background: string;
}

export const lightTheme: Theme = {
  elements: "hsl(0, 0%, 100%)",
  input: "hsl(0, 0%, 52%)",
  text: "hsl(200, 15%, 8%)",
  background: "hsl(0, 0%, 98%)",
};

export const darkTheme: Theme = {
  elements: "hsl(209, 23%, 22%)",
  input: "hsl(0, 0%, 52%)",
  text: "hsl(0, 0%, 100%)",
  background: "hsl(207, 26%, 17%)",
};
