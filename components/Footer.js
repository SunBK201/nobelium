import BLOG from '@/blog.config'
import CC from '@/components/CC'

const Footer = ({ fullWidth }) => {
  const d = new Date()
  const y = d.getFullYear()
  const from = +BLOG.since
  return (
    <div
      className={`mt-6 flex-shrink-0 m-auto w-full text-gray-500 dark:text-gray-400 transition-all ${
        !fullWidth ? 'max-w-3xl px-4' : 'px-4 md:px-24'
      }`}
    >
      <hr className="border-gray-200 dark:border-gray-600" />
      <div className="my-4 text-sm leading-6">
        <div className="flex align-baseline justify-between flex-wrap">
          <p>
            © {BLOG.author} {from === y || !from ? y : `${from} - ${y}`}
          </p>
          <a href="https://hits.seeyoufarm.com" style="width: 19%;"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fblog.sunbk201.site&count_bg=%231F1F1F&title_bg=%230B0A0A&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"/></a>
          <CC />
        </div>
      </div>
    </div>
  )
}

export default Footer
