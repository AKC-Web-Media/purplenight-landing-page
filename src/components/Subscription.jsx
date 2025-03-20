import {
  useComputedColorScheme,
  Title,
  Stack,
  Text,
  Card,
  Group,
  List,
  Center,
  ScrollArea,
  Mark,
} from "@mantine/core";
import { cardShadows } from "../helpers/shadows";
import { Check, CrownCross, CrownSimple } from "@phosphor-icons/react";
import { useMediaQuery } from "@mantine/hooks";

function SubscriptionCard({
  title,
  price,
  icon,
  bg,
  features,
  isBigEnoughScreen,
}) {
  const colorScheme = useComputedColorScheme();

  return (
    <Card
      miw={isBigEnoughScreen ? 300 : 265}
      ml={isBigEnoughScreen ? "sm" : 0}
      mr={!isBigEnoughScreen && "xs"}
      mt={"lg"}
      p={isBigEnoughScreen ? "xl" : "sm"}
      radius={"lg"}
      bg={bg}
    >
      <Group gap={"lg"}>
        <Card
          w={60}
          h={60}
          p={0}
          bg={"white"}
          shadow={cardShadows.xs}
          radius={"lg"}
        >
          <Center h={"60"}>{icon}</Center>
        </Card>
        <Stack gap={0}>
          <Title fw={500} order={3}>
            {title}
          </Title>
          <Group gap={0} m={0}>
            <Text fw={600} size="xl">
              {price}
            </Text>
          </Group>
        </Stack>
      </Group>
      <List
        mt={"md"}
        size="sm"
        center
        icon={
          <Check
            size={18}
            color={colorScheme === "dark" ? "gray" : "black"}
            weight="bold"
          />
        }
      >
        <ScrollArea w={300} h={250} scrollbars="y">
          {features.map((feature, index) => (
            <List.Item key={index} pb={"xs"}>
              {feature}
            </List.Item>
          ))}
        </ScrollArea>
      </List>
    </Card>
  );
}

const plans = [
  {
    title: "Limited",
    subscription_type: "free",
    price: (
      <Mark color="black" c={"white"}>
        &nbsp;&nbsp; FREE &nbsp; &nbsp;
      </Mark>
    ),
    icon: <CrownSimple size={28} color="#a25915" weight="fill" />,
    bg: "white",
    features: [
      "12/month blog generation",
      "Limited to 2 books",
      "5MB upload limit per book",
      "Supported formats: PDF",
      "Free content sharing",
      "Access to dark poimandres theme",
    ],
    button: {
      text: "Default Active",
      disabled: true,
      variant: "outline",
    },
  },
  {
    title: "Avid Reader",
    subscription_type: "avid_reader",
    price: (
      <Mark color="black" c={"white"}>
        &nbsp;&nbsp; ₹499/month &nbsp; &nbsp;
      </Mark>
    ),
    icon: <CrownCross size={36} color="#edbd0c" weight="fill" />,
    bg: "white",
    features: [
      "1000 blog generation",
      ">250 books upload limit",
      "20MB upload limit per book",
      "Formats: PDF, EPUB, TXT, DOCX",
      "Listen to your blogs",
      "Unlimited content sharing",
      "Lifetime access to upcoming themes",
    ],
    button: {
      text: "Choose a plan",
      disabled: false,
      variant: "filled",
    },
  },
];

function Subscription() {
  const isBigEnoughScreen = useMediaQuery("(min-width: 1150px)");
  const isSmallScreen = useMediaQuery("(max-width: 710px)");
  console.log(isSmallScreen);

  return (
    <>
    {
!isSmallScreen && 
      <Group justify="center" wrap="no-wrap">
        {plans.map((plan) => (
          <SubscriptionCard
            subscription_type={plan.subscription_type}
            key={plan.title}
            {...plan}
            isBigEnoughScreen={isBigEnoughScreen}
          />
        ))}
      </Group>

    }
      {isSmallScreen && (
        <Stack>
          {plans.map((plan) => (
            <SubscriptionCard
              subscription_type={plan.subscription_type}
              key={plan.title}
              {...plan}
              isBigEnoughScreen={isBigEnoughScreen}
            />
          ))}
        </Stack>
      )}
    </>
  );
}
export default Subscription;
