import { SectionTitleTexts } from '../SectionTitleTexts'
import { PlansBox } from './plansBox'
import './styles.scss'

export function PlansSection() {
  return (
    <section className="SectionPlans">
      <SectionTitleTexts title="NOSSOS PLANOS" subtitle="Invista no seu futuro" />
      <div className="PlansWrapper">
        <PlansBox
          BgColor="252160"
          Star="True"
          FontColor="FFFFFF"
          duration="1 ano de acesso"
          planType="Plano Recomendado"
          v1="Acesso a todos os benefícios da Plataforma
      (Videoaulas, Exercícios, Apostilas e muito mais)"
          v2="36 aulas ao vivo"
          v3="Revisão para o ENEM"
          v4="Grupo no Whatssap com professores e alunos"
          v5="Reforço para FUVEST, Unicamp e Vestibulares de Medicina"
          pagamento="/ano"
          from="de R$178,80 por"
          by="49,90"
          info="Menos de 5 reais por mês"
          BtnBgColor="gradient"
        />
        <PlansBox
          BgColor="FFFFFF"
          FontColor="252160"
          duration="6 meses de acesso"
          planType="Plano Aprovado"
          v1="Acesso a todos as videoaulas)"
          v2="Ganhe pontos resolvendo questões e troque por 
        prêmios"
          v3="3.000 exercícios com resolucão em vídeo"
          v4="4 apostilas com todo o conteúdo de Matemática"
          v5="Reforço para FUVEST, Unicamp e Vestibulares de Medicina"
          by="39,90"
          pagamento="/semestre"
          BtnBgColor="solid"
        />
      </div>
    </section>
  )
}