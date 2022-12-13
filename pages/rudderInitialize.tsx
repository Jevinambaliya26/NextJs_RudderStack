export async function rudderInitialize() {
  const rudderanalytics = await import("rudder-sdk-js");

  console.log("rudderanalytics=========", rudderanalytics);

  rudderanalytics.load(
    "2IiLJKxYEZEmpUgD18ATPuDWnIu",
    "https://cnogscedoltsb.dataplane.rudderstack.com",
    {
      integrations: { All: true }, // load call options
    }
  );

  rudderanalytics.ready(() => {
    console.log("we are all set!!!");
  });

  rudderanalytics.page("Home", "Home", { email: "abcd@gmail.com" }, () => {
    console.log("page call");
  });

}
