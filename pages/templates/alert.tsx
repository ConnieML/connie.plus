import * as React from "react";
// import { render } from "react-dom";
import { CustomizationProvider } from "@twilio-paste/core/customization";
import { Box } from "@twilio-paste/core/box";
import { Stack } from "@twilio-paste/core/stack";
import { Alert } from "@twilio-paste/core/alert";
import { Theme } from "@twilio-paste/core/theme";
import type { NextPage } from "next";

// import { PrototypeAnchor } from '../components/site/PrototypeAnchor';
const Demos: NextPage = () => {
  return (
  <>
   <CustomizationProvider
        baseTheme="default"
        elements={{
          ALERT: {
            borderRadius: "borderRadius30",
            variants: {
              error: {
                fontWeight: "fontWeightBold"
              },
              warning: {
                fontWeight: "fontWeightBold"
              }
            }
          },
          CUSTOM_ALERT: {
            borderRadius: "borderRadius30",
            borderStyle: "solid",
            borderWidth: "borderWidth10",
            paddingY: "space80",
            variants: {
              neutral: {
                borderColor: "colorBorderPrimaryWeak"
              },
              error: {
                borderColor: "colorBorderErrorWeak"
              },
              warning: {
                borderColor: "colorBorderWarningWeak"
              }
            }
          }
        }}
      >
        <Box padding="space100">
          <Stack orientation="vertical" spacing="space40">
            <Alert variant="neutral">Neutral alert</Alert>
          </Stack>
        </Box>
      </CustomizationProvider>
      <Theme.Provider theme="default">
        <Box padding="space100">
          <Stack orientation="vertical" spacing="space40">
            <Alert variant="neutral">Neutral alert</Alert>
          </Stack>
        </Box>
      </Theme.Provider>  
  </>
  );
};
export default Demos