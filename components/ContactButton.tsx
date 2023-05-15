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
  className?: string;
  children: React.ReactNode;
  height?: string;
}

const ContactButton: React.FC<contactProps> = ({
  href,
  borderColor,
  color,
  hoverBgColor,
  hoverColor,
  className = 'text-sm flex flex-row',
  children,
  height
}) => {
  const [state, setState] = useState(false);

  const buttonClick = useCallback(() => {
    setState((current) => !current);
    setTimeout(() => {
      setState((current) => current);
    }, 1000);
  }, []);
  
  return (
    <Link href={href}>
      <Button
        variant="outline"
        borderColor={borderColor}
        color={color}
        _hover={{ bgColor: hoverBgColor, color: hoverColor }}
        _focus={{ bgColor: hoverBgColor, color: hoverColor }}
        _active={{ bgColor: hoverBgColor, color: hoverColor }}
        isLoading={state}
        onClick={buttonClick}
        height={height}
      >
        <span className={className}>{children}</span>
      </Button>
    </Link>
  );
};

export default ContactButton;
