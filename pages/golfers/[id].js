import { useRouter } from 'next/router'
import useUserScores from '../../lib/useUserScores'
import Layout from '../../components/Layout'
import ScoreCard from '../../components/ScoreCard'

const GolferPage = () => {
  const router = useRouter()
  const { id } = router.query
  const { scores, error } = useUserScores(id)

  return (
    <>
      <Layout>
        { error ? (
          error
        ) : (
          <>
            {scores && scores.map(score => (
              <ScoreCard
                key={score.id}
                id={score.id}
                totalScore={score.total_score}
                playedAt={score.played_at}
                userId={score.user_id}
                userName={score.user_name}
              />
            ))}
          </>
          )}
      </Layout>
    </>
  )
}

export default GolferPage
