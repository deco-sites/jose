export interface props {
  githubLink: string;
  linkedinLink: string;
  email: string;
  phone: string;
}

export default function Footer( {email, githubLink, linkedinLink, phone}: props) {
  return (
		<div className="w-[98%] max-w-5xl grid grid-cols-1 px-10 py-20 sm:(grid-cols-2 px-5 py-10) mx-auto text-center gap-2">
				<a target="_blank" href={`${githubLink}`} alt={`${githubLink}`}>
					Github
				</a>
				<a target="_blank" href={`${linkedinLink}`} alt={`${linkedinLink}`}>
					Linkedin
				</a>
				<a target="_blank" href={`mailto:${email}`} alt={`${email}`}>
					{email}
				</a>
				<a target="_blank" href={`tel:${phone}`} alt={`${phone}`}>
					{phone}
				</a>
		</div>
	);
}