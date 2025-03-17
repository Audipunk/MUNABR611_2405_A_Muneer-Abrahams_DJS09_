const reviewTotalDisplay = document.querySelector("#reviews");
const returningUserDisplay = document.querySelector("#returning-user");
const userNameDisplay = document.querySelector("#user");
import { LoyaltyUser } from "./enums";

export function showReviewTotal(
  value: number,
  reviewer: string,
  isLoyalty: LoyaltyUser
) {
  const iconDisplay = LoyaltyUser.GOLD_USER ? "⭐" : "";
  reviewTotalDisplay.innerHTML =
    value.toString() +
    "Review" +
    makeMultiple(value) +
    "| last reviewed by " +
    reviewer +
    " " +
    iconDisplay;
}

export function populateUser(isReturning: boolean, userName: string) {
  if (isReturning == true) {
    returningUserDisplay.innerHTML = "back";
  }
  userNameDisplay.innerHTML = userName;
}

export function makeMultiple(value: number): string {
  if (value > 1 || value == 0) {
    return "s";
  } else return "";
}

// Grabbing the top reviews from array
export function getTopTwoReviews(
  reviews: {
    name: string;
    stars: number;
    loyalyuser: LoyaltyUser;
    date: string;
  }[]
): {
  name: string;
  stars: number;
  loyalyuser: LoyaltyUser;
  date: string;
}[] {
  const sortedReviews = reviews.sort((a, b) => b.stars - a.stars);
  return sortedReviews.slice(0, 2);
}