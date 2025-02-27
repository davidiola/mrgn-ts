import { LipClientProvider } from "~/context";
import { useWalletContext } from "~/hooks/useWalletContext";
import { PageHeader } from "~/components/common/PageHeader";
import { CampaignWizard } from "~/components/desktop/CampaignWizard";

const LIP = () => {
  const { connected } = useWalletContext();

  return (
    <LipClientProvider>
      <PageHeader>lip</PageHeader>
      {connected && <CampaignWizard />}
    </LipClientProvider>
  );
};

export default LIP;
