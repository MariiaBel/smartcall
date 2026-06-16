import { cn } from "@/lib/utils";
import SvgIcon from "../svgIcon/svgIcon";
import Button from "./button";

interface ContactButtonProps {
    className?: string
    mode?: string
}
export default function ContactButton({ className, mode }: ContactButtonProps) {

    return <Button className={cn('justify-start', className)} mode={mode} href="https://t.me/MariiaBel" external>
        Написать в Telegram
        <SvgIcon id="telegram" width={20} height={20} className="w-5 h-5" />
    </Button>
}