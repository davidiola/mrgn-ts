import React from "react";

import Link from "next/link";

import { Button } from "@mui/material";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import CheckIcon from "@mui/icons-material/Check";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { useUiStore, useUserProfileStore } from "~/store";
import { useWalletContext } from "~/hooks/useWalletContext";
import { PageHeader } from "~/components/common/PageHeader";
import {
  PointsLeaderBoard,
  PointsOverview,
  PointsCheckingUser,
  PointsConnectWallet,
} from "~/components/desktop/Points";

const Points = () => {
  const { connected } = useWalletContext();

  const [currentFirebaseUser, userPointsData] = useUserProfileStore((state) => [
    state.currentFirebaseUser,
    state.userPointsData,
  ]);
  const [setIsWalletAuthDialogOpen] = useUiStore((state) => [state.setIsWalletAuthDialogOpen]);

  const [isReferralCopied, setIsReferralCopied] = React.useState(false);

  return (
    <>
      <PageHeader>points</PageHeader>
      <div className="flex flex-col items-center w-full max-w-8xl px-10 gap-5 py-[64px] sm:py-[32px]">
        {!connected ? (
          <PointsConnectWallet />
        ) : currentFirebaseUser ? (
          <PointsOverview userPointsData={userPointsData} />
        ) : (
          <PointsCheckingUser />
        )}
        <div className="w-2/3 flex justify-center items-center gap-5">
          <Button
            className="normal-case text-lg font-aeonik w-[92%] min-h-[60px] rounded-[45px] whitespace-nowrap min-w-[260px] max-w-[260px]"
            style={{
              backgroundColor: "rgb(227, 227, 227)",
              border: "none",
              color: "black",
              zIndex: 10,
            }}
            component="a"
            href="https://medium.com/marginfi/introducing-mrgn-points-949e18f31a8c"
            target="_blank"
            rel="noopener noreferrer"
          >
            How do points work?
          </Button>

          <CopyToClipboard
            text={`https://www.mfi.gg/refer/${userPointsData.referralLink}`}
            onCopy={() => {
              if (userPointsData.referralLink && userPointsData.referralLink.length > 0) {
                setIsReferralCopied(true);
                setTimeout(() => setIsReferralCopied(false), 2000);
              } else {
                setIsWalletAuthDialogOpen(true);
              }
            }}
          >
            <Button
              className={`normal-case text-lg font-aeonik w-[92%] min-h-[60px] rounded-[45px] gap-2 whitespace-nowrap min-w-[260px] max-w-[260px]`}
              style={{
                backgroundImage: userPointsData.isCustomReferralLink
                  ? "radial-gradient(ellipse at center, #fff 0%, #fff 10%, #DCE85D 60%, #DCE85D 100%)"
                  : "none",
                backgroundColor: userPointsData.isCustomReferralLink ? "transparent" : "rgb(227, 227, 227)",

                border: "none",
                color: "black",
                zIndex: 10,
              }}
            >
              {isReferralCopied
                ? "Link copied"
                : `${
                    userPointsData.isCustomReferralLink
                      ? userPointsData.referralLink?.replace("https://", "")
                      : "Copy referral link"
                  }`}
              {isReferralCopied ? <CheckIcon /> : <FileCopyIcon />}
            </Button>
          </CopyToClipboard>
        </div>
        <div className="w-4/5 text-center text-[#868E95] text-xs flex justify-center gap-1">
          <div>We reserve the right to update point calculations at any time.</div>
          <div>
            <Link href="/terms/points" style={{ textDecoration: "underline" }}>
              Terms.
            </Link>
          </div>
        </div>
        <PointsLeaderBoard currentUserId={currentFirebaseUser?.uid} />
      </div>
    </>
  );
};

export default Points;
