#   Step 3: Transferring G Suite Metadata to the Wallarm Setup Wizard

[img-sp-wizard-transfer-metadata]:  ../../../../images/admin-guides/configuration-guides/sso/gsuite/sp-wizard-transfer-metadata.png
[img-transfer-metadata-manually]:   ../../../../images/admin-guides/configuration-guides/sso/gsuite/transfer-metadata-manually.png
[img-sp-wizard-finish]:             ../../../../images/admin-guides/configuration-guides/sso/gsuite/sp-wizard-finish.png
[img-integration-tab]:               ../../../../images/admin-guides/configuration-guides/sso/gsuite/integration-tab.png

[doc-setup-idp]:                    setup-idp.md
[doc-allow-access-to-wl]:           allow-access-to-wl.md

[anchor-upload-metadata-xml]:       #uploading-metadata-using-an-xml-file
[anchor-upload-metadata-manually]:  #copying-parameters-manually

Return to the G Suite SSO setup wizard in Wallarm Console and click *Next* to proceed to the next setup step.

At this stage, you need to provide the metadata generated by the G Suite service to the Wallarm SSO setup wizard.

There are two ways to transfer metadata:
*   [Upload an XML file with metadata in the Wallarm setup wizard.][anchor-upload-metadata-xml]
*   [Copy and paste the required parameters into the Wallarm setup wizard manually.][anchor-upload-metadata-manually]


##  Uploading Metadata Using an XML File

If you saved the metadata of G Suite as an XML file when configuring the application in G Suite earlier (in [Step 2][doc-setup-idp]), click the *Upload* button and select the desired file. You can also do this by dragging the file from your file manager to the “XML” icon. After uploading the file, click *Next* to go to the next step.

![!Metadata uploading][img-sp-wizard-transfer-metadata]


##  Copying Parameters Manually

If you have copied the provided identity provider parameters when configuring the application in G Suite, click the *Enter manually* link to enter the copied parameters manually and fill out the form. 

Insert the parameters generated by G Suite into the fields of the Wallarm setup wizard as follows:

*   **SSO URL** → **Identity provider SSO URL**
*   **Entity ID** → **Identity provider issuer**
*   **Certificate** → **X.509 Certificate**

Click *Next* to go to the next step. If you want to return to the previous step, click *Back*.

![!Entering the metadata manually][img-transfer-metadata-manually]


##  Completing SSO Wizard

On the final step of the Wallarm setup wizard, a test connection to the G Suite service will be performed automatically and the SSO provider will be checked.

After successful completion of the test (if all the necessary parameters are filled in correctly), the setup wizard will inform you that the G Suite service is connected as an identity provider and you can start connecting the SSO mechanism to authenticate your users.

Finish configuring SSO by clicking the *Finish* button or go to the user page to configure SSO by clicking the corresponding button.

![!Completing SSO wizard][img-sp-wizard-finish]

After completing the SSO configuration wizard, on the Integration tab you will see that the G Suite service is connected as an identity provider and that no other SSO providers are available.

![!The “Integration” tab after finishing the SSO wizard][img-integration-tab]


Now, navigate to [the next step][doc-allow-access-to-wl] of the SSO configuration process.
