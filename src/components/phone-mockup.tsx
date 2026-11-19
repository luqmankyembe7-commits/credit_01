import { MemberSnapshot } from "@/components/member-snapshot";
import { getMemberPreview } from "@/data";

export function PhoneMockup() {
  const preview = getMemberPreview();

  return (
    <div className="mx-auto w-[272px] rounded-[2rem] border-[10px] border-[#14241c] bg-[#14241c] shadow-2xl shadow-[#14241c]/20">
      <div className="overflow-hidden rounded-[1.35rem] bg-[#fffdf8]">
        <div className="flex items-center justify-between bg-[#145c38] px-4 py-2 text-[0.65rem] font-medium text-[#f7f3ea]">
          <span>BreadWinners</span>
          <span>Preview</span>
        </div>
        <MemberSnapshot preview={preview} compact />
      </div>
    </div>
  );
}
