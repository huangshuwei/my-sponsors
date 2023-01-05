import { defineConfig, presets } from "sponsorkit";

export default defineConfig({
  tiers: [
    {
      title: "Past Sponsors",
      monthlyDollars: -1,
      preset: presets.xs,
    },
    {
      title: "Backers",
      preset: presets.small,
    },
    {
      title: "Generous Sponsors",
      monthlyDollars: 10,
      preset: {
        avatar: {
          size: 42,
        },
        boxWidth: 52,
        boxHeight: 52,
        container: {
          sidePadding: 30,
        },
      },
    },
    {
      title: "Silver Sponsors",
      monthlyDollars: 50,
      preset: presets.medium,
    },
    {
      title: "Gold Sponsors",
      monthlyDollars: 100,
      preset: presets.large,
    },
    {
      title: "Platinum Sponsors(预留)",
      monthlyDollars: 500,
      preset: presets.xl,
    },
  ],
});
