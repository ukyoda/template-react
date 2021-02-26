export interface AsyncDemoType {
  value: number;
  loading: "init" | "pending" | "resolve" | "reject";
}
