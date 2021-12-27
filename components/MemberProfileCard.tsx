import { Member } from "../data/members";
import ProfileCard from "./ProfileCard";

export default function MemberProfileCard({ member, roleLimit }: { member: Member, roleLimit: number }) {
  return (
    <ProfileCard name={member.name} subtitles={member.roles.slice(-roleLimit).reverse()} />
  )
}
