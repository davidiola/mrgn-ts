import React from "react";

import dynamic from "next/dynamic";

import { MarginfiAccountWrapper } from "@mrgnlabs/marginfi-client-v2";
import { shortenAddress } from "@mrgnlabs/mrgn-common";

import { Desktop, Mobile } from "~/mediaQueries";
import { useMrgnlendStore, useUiStore } from "~/store";
import { useConnection } from "~/hooks/useConnection";
import { useWalletContext } from "~/hooks/useWalletContext";

import { Banner } from "~/components/desktop/Banner";
import { OverlaySpinner } from "~/components/desktop/OverlaySpinner";
import { PageHeader } from "~/components/common/PageHeader";
import { ActionBox } from "~/components/common/ActionBox";
import { Stats } from "~/components/common/Stats";

import { IconAlertTriangle } from "~/components/ui/icons";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger } from "~/components/ui/select";
import { UserMode } from "~/types";

const AssetsList = dynamic(async () => (await import("~/components/desktop/AssetsList")).AssetsList, { ssr: false });

const MobileAssetsList = dynamic(async () => (await import("~/components/mobile/MobileAssetsList")).MobileAssetsList, {
  ssr: false,
});

const Home = () => {
  const { walletAddress, isOverride } = useWalletContext();
  const [userMode] = useUiStore((state) => [state.userMode]);
  const [
    fetchMrgnlendState,
    isStoreInitialized,
    isRefreshingStore,
    setIsRefreshingStore,
    marginfiAccounts,
    selectedAccount,
  ] = useMrgnlendStore((state) => [
    state.fetchMrgnlendState,
    state.initialized,
    state.isRefreshingStore,
    state.setIsRefreshingStore,
    state.marginfiAccounts,
    state.selectedAccount,
  ]);

  return (
    <>
      <Desktop>
        <PageHeader>lend</PageHeader>
        <div className="flex flex-col h-full justify-start content-start pt-[16px] w-full xl:w-4/5 xl:max-w-7xl gap-4">
          {walletAddress && selectedAccount && isOverride && (
            <Banner
              text={`Read-only view of ${selectedAccount.address.toBase58()} (owner: ${shortenAddress(
                walletAddress
              )}) - All actions are simulated`}
              backgroundColor="#DCE85D"
            />
          )}
          {walletAddress && selectedAccount && marginfiAccounts.length > 1 && (
            <MultipleAccountsBanner
              selectedAccount={selectedAccount}
              marginfiAccounts={marginfiAccounts}
              fetchMrgnlendState={fetchMrgnlendState}
              isRefreshing={isRefreshingStore}
              setIsRefreshing={setIsRefreshingStore}
            />
          )}
          <Stats />
          {userMode === UserMode.LITE && <ActionBox />}
        </div>
        <div className="pt-[16px] pb-[64px] px-4 w-full xl:w-4/5 xl:max-w-7xl mt-8 gap-4">
          <AssetsList />
        </div>
        <OverlaySpinner fetching={!isStoreInitialized || isRefreshingStore} />
      </Desktop>

      <Mobile>
        <PageHeader>lend</PageHeader>
        {walletAddress && selectedAccount && marginfiAccounts.length > 1 && (
          <MultipleAccountsBanner
            selectedAccount={selectedAccount}
            marginfiAccounts={marginfiAccounts}
            fetchMrgnlendState={fetchMrgnlendState}
            isRefreshing={isRefreshingStore}
            setIsRefreshing={setIsRefreshingStore}
          />
        )}
        <Stats />
        <ActionBox />
        <div className="flex flex-col w-full h-full justify-start content-start pt-4 px-4 gap-4 mt-8 mb-20">
          <MobileAssetsList />
        </div>
      </Mobile>
    </>
  );
};

export default Home;

const MultipleAccountsBanner = ({
  selectedAccount,
  marginfiAccounts,
  fetchMrgnlendState,
  isRefreshing,
  setIsRefreshing,
}: {
  selectedAccount: MarginfiAccountWrapper;
  marginfiAccounts: MarginfiAccountWrapper[];
  fetchMrgnlendState: any;
  isRefreshing: boolean;
  setIsRefreshing: (isRefreshingStore: boolean) => void;
}) => {
  const shortAddress = React.useMemo(
    () => shortenAddress(selectedAccount.address.toBase58()),
    [selectedAccount.address]
  );

  return (
    <div className="bg-muted text-white/80 py-4 px-5 rounded-sm w-full flex">
      <div className="w-full flex flex-col gap-2">
        <div className="w-full flex gap-2 items-center">
          <IconAlertTriangle className="text-[#FF0]/80" size={16} />
          <h2 className="font-medium">
            Multiple accounts found <span className="font-light text-sm ml-1">(support coming soon)</span>
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm font-normal">Select account:</p>
          <Select
            value={selectedAccount.address.toBase58()}
            disabled={isRefreshing}
            onValueChange={(value) => {
              setIsRefreshing(true);
              localStorage.setItem("mfiAccount", value);
              fetchMrgnlendState();
            }}
          >
            <SelectTrigger className="w-[180px]">{isRefreshing ? "Loading..." : shortAddress}</SelectTrigger>
            <SelectContent className="w-full">
              <SelectGroup>
                <SelectLabel>Accounts</SelectLabel>
                {marginfiAccounts.map((account, index) => (
                  <SelectItem key={index} value={account.address.toBase58()} className="!text-xs">
                    {account.address.toBase58()}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
