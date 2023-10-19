import "./DeployingTheContosoSupermarketScenario.css";

export const DeployingTheContosoSupermarketScenario =
  ({ ...props }) => {
    return (
      <div className="deploying-the-contoso-supermarket-scenario">
        <span>
          <span className="deploying-the-contoso-supermarket-scenario-span">
            Deploying the “Contoso Supermarket” scenario consists of the
            following steps (once prerequisites are met).
            <br />
          </span>
          <span className="deploying-the-contoso-supermarket-scenario-span2">
            Deploy infrastructure - The user deploys a Bicep file that creates
            the infrastructure in an Azure resource group.
            <br />
            Bicep template deploys multiple Azure resources including the Client
            virtual machine.
            <br />
            Client VM uses a custom script extension to run the Bootstrap
            PowerShell script which initializes the environment.
            <br />
            Bootstrap script injects the Logon script to the Client VM.
            <br />
            User logs in to the Agora-VM-Client Azure virtual machine.
            <br />
            After login the Agora-VM-Client PowerShell scripts automatically run
            that configure the applications and CI/CD. These scripts will take
            some time to run.
            <br />
          </span>
          <span className="deploying-the-contoso-supermarket-scenario-span3">
            Once automation is complete, users can immediately start enjoying
            the Contoso Supermarket experience.
          </span>
        </span>{" "}
      </div>
    );
  };
