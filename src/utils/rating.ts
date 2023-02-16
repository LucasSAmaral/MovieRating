/*
 "Ratings": [
      { "Source": "Internet Movie Database", "Value": "8.6/10" },
      { "Source": "Rotten Tomatoes", "Value": "100%" },
      { "Source": "Metacritic", "Value": "98/100" }
    ],
    */
export interface RatingTypes {
  Source?: string;
  Value: string;
}

const getRating = (ratings: RatingTypes[]) => {
  let total = 0;
  if (Array.isArray(ratings)) {
    ratings.forEach((rate) => {
      if (rate.Value.includes("/")) {
        const valueParts = rate.Value.split("/");
        const part0 = Number(valueParts[0]);
        const part1 = Number(valueParts[1]);

        if (part1 === 100) {
          total += part0;
        } else if (part1 === 10) {
          total += Number(part0 * part1);
        }
      } else if (rate.Value.includes("%")) {
        total += Number(Number(rate.Value.replace("%", "")));
      }
    });
  }
  return Math.floor(total / 60);
};

export default getRating;
