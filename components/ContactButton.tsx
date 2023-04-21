import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { Url } from "url";
import { useCallback, useState } from "react";
import { useRouter } from "next/router";

interface contactProps {
  href: string;
  borderColor: string;
  color: string;
  hoverBgColor: string;
  hoverColor: string;
  children: React.ReactNode;
}

const ContactButton: React.FC<contactProps> = ({
  href,
  borderColor,
  color,
  hoverBgColor,
  hoverColor,
  children,
}) => {
  const [state, setState] = useState(false);

  const buttonClick = useCallback(() => {
    setState((current) => !current);
  }, []);
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    setTimeout(() => {
      router.push(href);
    }, 500);
  };

  return (
    <Link href={href} onClick={handleClick}>
      <Button
        variant="outline"
        borderColor={borderColor}
        color={color}
        _hover={{ bgColor: hoverBgColor, color: hoverColor }}
        isLoading={state}
        onClick={buttonClick}
      >
        {children}
      </Button>
    </Link>
  );
};

export default ContactButton;
