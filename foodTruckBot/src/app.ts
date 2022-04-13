import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

const seattleFoodTruckUrl = "https://www.seattlefoodtruck.com/api/locations?include_events=true&include_trucks=true&only_with_events=true&with_active_trucks=true&neighborhood=downtown&with_events_on_day="

export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {

  const colors = ["#00adbc", "7665a0"];
  // ko-KR allows the year-month-day
  const today = new Date().toLocaleDateString('ko-KR', {year: "numeric", month: "2-digit", day: "2-digit"}).replace(/\. /g, '-').replace(/\./g, '');
  const url = `${seattleFoodTruckUrl}${today}`;
  
  console.log('Hooray! A URL! In a Lamda!');
  console.log(url);

  return

}
