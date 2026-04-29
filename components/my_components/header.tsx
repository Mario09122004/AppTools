import Menu from "./menu";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Divider } from "../ui/divider";

export default function Header() {
    return (
        <>
            <Box className="flex-row justify-center items-center gap-4 h-16 pt-2">
                <Box className="w-1/10">
                    <Menu />
                </Box>
                <Box className="w-4/5 items-center">
                    <Text size='2xl'>Insert Module Name</Text>
                </Box>
            </Box>
            <Divider />
        </>
    );
}