// app/practice/components/Controls.tsx
import Button from "@/components/Button";

export default function Controls({
    onShow,
    onNext,
    disabled = false,
}: {
    onShow: () => void;
    onNext: () => void;
    disabled?: boolean;
}) {
    return (
        <div className="flex justify-center gap-4">
            <Button onClick={onShow} color="blue">
                Show
            </Button>
            <Button onClick={onNext} color="green">
                Next
            </Button>
        </div >
    );
}